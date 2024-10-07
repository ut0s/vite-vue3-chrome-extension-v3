

import { exec } from "node:child_process"
import { GetInstalledBrowsers } from "./getInstalledBrowsers"
import concurrently, { type ConcurrentlyCommandInput } from "concurrently"
import { program } from "commander"

program
  .option("-a, --all", "Launch All Supported Browsers", false)
  .option("-c, --chrome", "Launch Chrome only", true)
  .option("-e, --edge", "Launch Edge only", false)
  .option(
    "-v, --vite-chrome-config <path>",
    "Path to Vite Chrome config",
    "vite.chrome.config.ts"
  )

program.parse(process.argv)

const options = program.opts<{
  all: boolean
  chrome: boolean
  edge: boolean
  viteChromeConfig: string
}>()

async function runViteDev() {
  return new Promise<void>((resolve) => {
    console.info("Starting Vite dev servers...")

    const viteChrome = exec(`vite dev --config ${options.viteChromeConfig}`)

    viteChrome.stdout?.pipe(process.stdout)
    viteChrome.stderr?.pipe(process.stderr)

    viteChrome.on("exit", (code) => {
      console.info(`Vite Chrome process exited with code ${code}`)
    })

    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

async function launchBrowsers() {
  console.info("Detecting installed browsers...")

  const installedBrowsers = GetInstalledBrowsers()
  const commands: Array<ConcurrentlyCommandInput> = []

  if (options.chrome || options.all) {
    if (installedBrowsers.Chrome) {
      commands.push({
        command: installedBrowsers.Chrome.command,
        name: installedBrowsers.Chrome.name,
      })
    } else {
      console.error("Chrome is not installed.")
    }
  }

  if (options.edge || options.all) {
    if (installedBrowsers.Edge) {
      commands.push({
        command: installedBrowsers.Edge.command,
        name: installedBrowsers.Edge.name,
      })
    } else {
      console.error("Edge is not installed.")
    }
  }

  if (commands.length > 0) {
    console.info("Launching browsers...")

    concurrently(commands, {
      killOthers: ["failure", "success"],
      restartTries: 1,
    })
  } else {
    console.error("No compatible browsers found or selected.")
  }
}

process.on("SIGINT", () => {
  console.info("Received SIGINT. Shutting down...")
  process.exit()
})

process.on("SIGTERM", () => {
  console.info("Received SIGTERM. Shutting down...")
  process.exit()
})

runViteDev().then(launchBrowsers)
