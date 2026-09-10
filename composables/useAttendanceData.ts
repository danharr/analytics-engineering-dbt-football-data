import attendanceCsv from '~/assets/data/attendance.csv?raw'
import { parse, toFloat, type AttendanceRow } from '~/composables/useChartHelpers'

export const attendance = parse<AttendanceRow>(attendanceCsv, d => ({
  season_label: d.season_label,
  team_abbr: d.team_abbr,
  team_name: d.team_name,
  avg_home_attendance: toFloat(d, 'avg_home_attendance')
}))
