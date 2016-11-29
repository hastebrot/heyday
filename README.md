Heyday
======

> This is pre-alpha software. It is mostly incomplete and could eat your laundry.

**Heyday** is a minimalistic time tracker for the command line written in TypeScript.
It is heavily inspired by [Timetrap](https://github.com/samg/timetrap) which is written in Ruby.

<!-- TOC -->

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Command Reference](#command-reference)
    - [`heyday sheet`](#heyday-sheet)
    - [`heyday view`](#heyday-view)
    - [`heyday today|yesterday|week|month`](#heyday-todayyesterdayweekmonth)
    - [`heyday archive`](#heyday-archive)
    - [`heyday now`](#heyday-now)
    - [`heyday in`](#heyday-in)
    - [`heyday out`](#heyday-out)
    - [`heyday edit`](#heyday-edit)
    - [`heyday resume`](#heyday-resume)
    - [`heyday kill`](#heyday-kill)
- [Configuration Reference](#configuration-reference)

<!-- /TOC -->

## Installation

Probably something like this for `npm`

~~~
$ npm install --global https://github.com/hastebrot/heyday
~~~

or that for `yarn`

~~~
$ yarn global add https://github.com/hastebrot/heyday
~~~

## Usage

Commands related to time sheets.

- `$ heyday sheet` (short: `h s`) &mdash; list all sheets or switch to a sheet.
- `$ heyday view` (short: `h v`) &mdash; view all entries of the current or a given sheet.
  - `$ heyday today` (short: `h t`)
  - `$ heyday yesterday` (short: `h y`)
  - `$ heyday week` (short: `h w`)
  - `$ heyday month` (short: `h m`)

Commands related to entries.

- `$ heyday now` (short: `h n`) &mdash; print a description of all running entries.
- `$ heyday in` (short: `h i`) &mdash; start (check-in) the timer for an entry in the current sheet.
- `$ heyday out` (short: `h o`) &mdash; stop (check-out) the timer for the current sheet.
- `$ heyday edit` (short: `h e`) &mdash; edit an entry, insert a note, or change the start or end times.
- `$ heyday resume` (short: `h r`)
- `$ heyday kill` (short: `h k`)

## Examples

~~~
$ heyday sheet default
~~~

~~~
$ heyday view
~~~

## Command Reference

### `heyday sheet`

~~~
sheet [SHEET]
~~~

List all sheets or switch to a sheet.

### `heyday view`

~~~
view [SHEET|all] [--ids|-i] [--round|-r] [--start|-s DATETIME] [--end|-e DATETIME] [--format|-f FMT]
~~~

View all entries of the current or a given sheet.

### `heyday today|yesterday|week|month`

~~~
today|yesterday|week|month [SHEET|all] [--ids|-i] [--round|-r] [--format|-f FMT]
~~~

View all entries of today, yesterday, this week, or this month.

### `heyday archive`

~~~
archive [SHEET] [--start|-s DATETIME] [--end|-e DATETIME]
~~~

Move entries to an archive sheet.

### `heyday now`

~~~
now [SHEET|all]
~~~

Print a description of all running entries.

### `heyday in`

~~~
in [NOTES] [--at DATETIME]
~~~

Start the timer for an entry in the current sheet.

### `heyday out`

~~~
out [SHEET] [--at DATETIME]
~~~

Stop the timer for an entry in the current sheet.

### `heyday edit`

~~~
edit [NOTES] [--id ID] [--start DATETIME] [--end DATETIME] [--append]
~~~

Edit an entry, insert a note, or change the start or end times.

### `heyday resume`

~~~
resume [--id ID] [--at DATETIME]
~~~

### `heyday kill`

~~~
kill [SHEET] [--id ID]
~~~

## Configuration Reference