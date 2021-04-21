# SadLibs
Simple script that generates sad messages.

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Setup](#setup)
- [Status](#status)
- [Version](#version)

### Introduction
SadLibs (a play on the classic [*Mad Libs*](https://www.madlibs.com)) is a simple script written in JavaScript that generates a sad message by completing a phrase with randomly selected words.

This script was created based on instructions for the "Mixed Messages" project on [Codecademy](https://www.codecademy.com/).

### Technologies
- JavaScript

### Setup
After cloning or downloading the repository, you can use a JavaScript runtime such as [Node.js](https://nodejs.org/en/) to run this script.

The user can add, change, or remove words by editing lines 5-7 of `main.js`:
```javascript
noun : ['user','programmer','tinkerer'],
verb : ['want','make'],
adjective: ['new','verbose']
```

The phrase can be changed by editing line 16. Replace the phrase (enclosed in backticks) and insert the following wherever you want a randomly selected word:
- noun: `${word.generate(word.noun)}`
- verb: `${word.generate(word.verb)}`
- adjective: `${word.generate(word.adjective)}`

### Status
I might come back to this project at some point after I learn more to add features and interactivity, e.g., an interface allowing the user to add or change words before generating the sad message. For now, though, it is what it is. How sad.

### Version
1.0, 2021-04-19


