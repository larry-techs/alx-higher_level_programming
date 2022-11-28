#!/usr/bin/node
import { argv } from 'node:process'

if (argv === 1) {
  console.log('Argument found')
} else if (argv < 1) {
  console.log('No argument')
} else if (argv > 1) {
  console.log('Arguments found')
}
