import * as moment from "moment"
import * as _ from "lodash"

type Entry = {
  start: string,
  end: string,
  notes: string,
  sheet: string
};

if (require.main === module) {
  const entries: [Entry] = [
    { start: "2013-07-19 08:43:00", end: "2013-07-19 12:30:00", notes: "cleaning everything", sheet: "housekeeping" },
    { start: "2013-07-19 14:01:27", end: "2013-07-19 15:38:41", notes: "saga, part II", sheet: "comic time" },
    { start: "2013-07-19 15:38:59", end: "2013-07-19 17:40:00", notes: "yummy lasagne", sheet: "cooking" },
  ]
  formatTimetable(entries).forEach(it => console.log(it))
}

function formatTimetable(entries: [Entry]): string[] {
  const sortedEntries = _.sortBy(entries, it => moment(it.start).unix)

  const rows = []
  sortedEntries.forEach((entry, index) => {
    const start = moment(entry.start)
    const end = moment(entry.end)
    const duration = moment.duration(end.diff(start))

    const row = [
      _.padEnd(index === 0 ? start.format("ddd MMM DD, YYYY") : "", 16),
      _.padEnd(entry.notes, 35),
      _.padStart(`${start.format("HH:mm")}`, 5),
      _.padStart(`- ${end.format("HH:mm")}`, 7),
      _.padStart(`${Math.round(duration.asMinutes())} min`, 8),
    ]
    rows.push(row)
  })

  const rowHeader = [
    _.padEnd("Day", 16),
    _.padEnd("Notes", 35),
    _.padStart("Start", 5),
    _.padStart("End", 7),
    _.padStart("Duration", 8),
  ]

  const lineHeader = " " + rowHeader.join("   ")
  const lineSeparator = _.padEnd("", lineHeader.length, "-")

  const lines = []
  lines.push(lineSeparator)
  lines.push(lineHeader)
  lines.push(lineSeparator)
  rows.forEach(row => {
    lines.push(" " + row.join("   "))
  })
  lines.push(lineSeparator)
  return lines
}
