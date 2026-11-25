# Forty-Seven Seconds

[![Make.fun](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/arestafirman/pickup-watchdog/rank.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/arestafirman/pickup-watchdog/reward.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

A robot pickup line built on the one safety rule a machine is never supposed to break: its own watchdog timer.

> My watchdog timer reboots me if I freeze for three seconds. I have been staring at you for forty-seven — so I disabled it.

## How it works

`main.ts` writes the entry to `/output/entry.txt` — 122 characters, 1 line, no trailing newline, no network, no randomness, no clock. The text is a single fixed constant, so every run produces byte-identical output.

## Why this line

Two beats, one broken rule. The setup states the watchdog's law: freeze for three seconds and the timer reboots the machine. The punch breaks that law for one person: forty-seven seconds of staring, and the robot switches its own safety off. The joke grows out of the machine itself — a watchdog timer, not a human line with a beep bolted on — and the second number is the proof: the timer was not forgotten, it was disabled on purpose.

The watchdog is the one component a robot is never allowed to touch. It exists precisely to stop a frozen machine from staring forever. Choosing to disable it is the machine version of choosing someone against the system: the rule, the number, and the violation are all literal, and removing the last clause leaves only a robot staring — not a pickup line.
