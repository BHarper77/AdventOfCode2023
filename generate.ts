import { execSync } from "child_process"

const date = new Date()

// append `0` to start of date if needed for ordering
const day = date.getDate() < 10 ? `0${date.getDay}` : date.getDate()

execSync(`mkdir day${day}`, {
	shell: "powershell.exe"
})

execSync("new-item index.ts", {
	cwd: `day${day}`,
	shell: "powershell.exe"
})

const input = await fetch("https://adventofcode.com/2022/day/21/input", {
	// require cookie for logged in session
	headers: {
		"cookie": "session=53616c7465645f5f1008f8ed0d4fbd65a83e10834f9180877223a59973072d0cdb43067ab9831ffa2c998e8e13ade15a5bc45ebec68f02213d79c7d16e45a276",
	}
}).then(async (response) => await response.text())

execSync(`echo '${input}' | new-item input.txt`, {
	cwd: `day${day}`,
	shell: "powershell.exe"
})