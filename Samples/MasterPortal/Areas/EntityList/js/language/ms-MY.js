// If you want to suggest a new language you can use this file as a template.
// To reduce the file size you should remove the comment lines (the ones that start with // )
if(!window.calendar_languages) {
	window.calendar_languages = {};
}
// Here you define the language and Country code. Replace en-US with your own.
// First letters: the language code (lower case). See http://www.loc.gov/standards/iso639-2/php/code_list.php
// Last letters: the Country code (upper case). See http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm
window.calendar_languages['ms-my'] = {
	error_noview: 'Kalendar: Pandangan {0} tidak dijumpai',
	error_dateformat: 'Kalendar: Format tarikh salah {0}. Seharusnya sama ada \"sekarang\" atau \"tttt-bb-dd\".',
	error_loadurl: 'Kalendar: URL Peristiwa tidak ditetapkan',
	error_where: 'Kalendar: Arah navigasi salah {0}. Hanya boleh \"seterusnya\" atau \"sebelumnya\" atau \"hari ini\"',
	error_timedevide: 'Kalendar: Parameter pisah masa harus dibahagikan dengan 60 tanpa titik perpuluhan. Sesuatu seperti 10, 15, 30',

	no_events_in_day: 'Tiada peristiwa pada hari tersebut.',

	// {0} will be replaced with the year (example: 2013)
	title_year: '{0}',
	// {0} will be replaced with the month name (example: September)
	// {1} will be replaced with the year (example: 2013)
	title_month: '{0} {1}',
	// {0} will be replaced with the week number (example: 37)
	// {1} will be replaced with the year (example: 2013)
	title_week: 'minggu {0} daripada {1}',
	// {0} will be replaced with the weekday name (example: Thursday)
	// {1} will be replaced with the day of the month (example: 12)
	// {2} will be replaced with the month name (example: September)
	// {3} will be replaced with the year (example: 2013)
	title_day: '{0} {1} {2}, {3}',

	week:'Minggu {0}',
	all_day:     'Sepanjang hari',
	time:        'Masa',
	events:      'Peristiwa',
	before_time: 'Tamat selepas garis masa',
	after_time:  'Bermula selepas garis masa',

	m0: 'Januari',
	m1: 'Februari',
	m2: 'Mac',
	m3: 'April',
	m4: 'Mei',
	m5: 'Jun',
	m6: 'Julai',
	m7: 'Ogos',
	m8: 'September',
	m9: 'Oktober',
	m10: 'November',
	m11: 'Disember',

	ms0: 'Jan',
	ms1: 'Feb',
	ms2: 'Mac',
	ms3: 'Apr',
	ms4: 'Mei',
	ms5: 'Jun',
	ms6: 'Jul',
	ms7: 'Ogo',
	ms8: 'Sep',
	ms9: 'Okt',
	ms10: 'Nov',
	ms11: 'Dis',

	d0: 'Ahad',
	d1: 'Isnin',
	d2: 'Selasa',
	d3: 'Rabu',
	d4: 'Khamis',
	d5: 'Jumaat',
	d6: 'Sabtu',

	// Which is the first day of the week (2 for sunday, 1 for monday)
	first_day: 2,

	// The list of the holidays.
	// Each holiday has a date definition and a name (in your language)
	// For instance:
	// holidays: {
	// 	'date': 'name',
	// 	'date': 'name',
	// 	...
	//   'date': 'name' //No ending comma for the last holiday
	// }
	// The format of the date may be one of the following:
	// # For a holiday recurring every year in the same day: 'dd-mm' (dd is the day of the month, mm is the month). For example: '25-12'.
	// # For a holiday that exists only in one specific year: 'dd-mm-yyyy' (dd is the day of the month, mm is the month, yyyy is the year). For example: '31-01-2013'
	// # For Easter: use simply 'easter'
	// # For holidays that are based on the Easter date: 'easter+offset in days'.
	//   Some examples:
	//   - 'easter-2' is Good Friday (2 days before Easter)
	//   - 'easter+1' is Easter Monday (1 day after Easter)
	//   - 'easter+39' is the Ascension Day
	//   - 'easter+49' is Pentecost
	// # For holidays that are on a specific weekday after the beginning of a month: 'mm+n*w', where 'mm' is the month, 'n' is the ordinal position, 'w' is the weekday being 0: Sunday, 1: Monday, ..., 6: Saturnday
	//   For example:
	//   - Second (2) Monday (1) in October (10): '10+2*1'
	// # For holidays that are on a specific weekday before the ending of a month: 'mm-n*w', where 'mm' is the month, 'n' is the ordinal position, 'w' is the weekday being 0: Sunday, 1: Monday, ..., 6: Saturnday
	//   For example:
	//   - Last (1) Saturnday (6) in Match (03): '03-1*6'
	//   - Last (1) Monday (1) in May (05): '05-1*1'
	// # You can also specify a holiday that lasts more than one day. To do that use the format 'start>end' where 'start' and 'end' are specified as above.
	//   For example:
	//   - From 1 January to 6 January: '01-01>06-01'
	//   - Easter and the day after Easter: 'easter>easter+1'
	//   Limitations: currently the multi-day holydays can't cross an year. So, for example, you can't specify a range as '30-12>01-01'; as a workaround you can specify two distinct holidays (for instance '30-12>31-12' and '01-01'). 
	holidays: {
	}
};
