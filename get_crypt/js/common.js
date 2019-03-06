// P.S. Using global variables, I might not repeat the code for each column, but it's bad practise//

"use strict";
$(document).ready(function(){
	//----------Jselector-----//
	$('select').jselector();
	
	// setInterval(getRate, 5000);
	getRate();
	$('select[name="select_cur"]').on('change', getRate);
	$('input[name="switch"]').on('change', getRateEth);
	$('input[name="switch1"]').on('change', getRateLtc);
	$('input[name="switch2"]').on('change', getRateBtc);

});

// 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCRUB', 
// 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHRUB',
// 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCRUB',

function getRate() {
	getRateEth();
	getRateLtc();
	getRateBtc();
}

//----------------Ethereum------------------//
function getRateEth() {
	var hour, day, week, month, symbol, changeNotation, currency, symbolCur;
		
		// Currency selector //
		switch ($('select[name="select_cur"]').val()) {
		case "USD":
		currency = "USD";
		symbolCur = "&#36;";
		break;
		case "EUR":
		currency = "EUR";
		symbolCur = "&euro;";
		break;
		case "RUB":
		currency = "RUB";
		symbolCur = "&#8381;";
		break;
		case "GBP":
		currency = "GBP";
		symbolCur = "&pound;";
		break;
	}

	$.get(
		'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' + currency,
		function(data) {
			// Switch state //
			if ($('input[name="switch"]').prop("checked")) {
					changeNotation = "percent";
					symbol = "%";
				} else if (!$('input[name="switch"]').prop("checked")) {
					changeNotation = "price";
					symbol = symbolCur;
			}

			hour = data.changes[changeNotation].hour;
			day = data.changes[changeNotation].day;
			week = data.changes[changeNotation].week;
			month = data.changes[changeNotation].month;

			$("#price").html(symbolCur + data.ask); //Price
			
			if (hour === "") {$("#hour").html("unknown").css('color', 'white');} // Hour change
			else if (hour >= 0) {$("#hour").html("+" + hour + symbol).css('color', '#11c536');}
			else {$("#hour").html(hour + symbol).css('color', '#ea061f');};

			if (day === "") {$("#day").html("unknown").css('color', 'white');} //Day change
			else if (day >= 0) {$("#day").html("+" + day + symbol).css('color', '#11c536');}
			else {$("#day").html(day + symbol).css('color', '#ea061f');};

			if (week === "") {$("#week").html("unknown").css('color', 'white');}  //Week change
			else if (week >= 0) {$("#week").html("+" + week + symbol).css('color', '#11c536');}
			else {$("#week").html(week + symbol).css('color', '#ea061f');};

			if (month === "") {$("#month").html("unknown").css('color', 'white');}  //Month change
			else if (month >= 0) {$("#month").html("+" + month + symbol).css('color', '#11c536');}
			else {$("#month").html(month + symbol).css('color', '#ea061f');};
		}
	);
}

//--------------------Litecoin-------------------------//
function getRateLtc() {
	var hour, day, week, month, symbol, changeNotation, currency, symbolCur;
		// Currency selector //
		switch ($('select[name="select_cur"]').val()) {
		case "USD":
		currency = "USD";
		symbolCur = "&#36;";
		break;
		case "EUR":
		currency = "EUR";
		symbolCur = "&euro;";
		break;
		case "RUB":
		currency = "RUB";
		symbolCur = "&#8381;";
		break;
		case "GBP":
		currency = "GBP";
		symbolCur = "&pound;";
		break;
	}

	$.get(
		'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + currency,
		function(data) {
			// Switch state //
			if ($('input[name="switch1"]').prop("checked")) {
					changeNotation = "percent";
					symbol = "%";
				} else if (!$('input[name="switch1"]').prop("checked")) {
					changeNotation = "price";
					symbol = symbolCur;
			}

			hour = data.changes[changeNotation].hour;
			day = data.changes[changeNotation].day;
			week = data.changes[changeNotation].week;
			month = data.changes[changeNotation].month;

			$("#price1").html(symbolCur + data.ask); //Price
			
			if (hour === "") {$("#hour1").html("unknown").css('color', 'white');} // Hour change
			else if (hour >= 0) {$("#hour1").html("+" + hour + symbol).css('color', '#11c536');}
			else {$("#hour1").html(hour + symbol).css('color', '#ea061f');};

			if (day === "") {$("#day1").html("unknown").css('color', 'white');} //Day change
			else if (day >= 0) {$("#day1").html("+" + day + symbol).css('color', '#11c536');}
			else {$("#day1").html(day + symbol).css('color', '#ea061f');};

			if (week === "") {$("#week1").html("unknown").css('color', 'white');}  //Week change
			else if (week >= 0) {$("#week1").html("+" + week + symbol).css('color', '#11c536');}
			else {$("#week1").html(week + symbol).css('color', '#ea061f');};

			if (month === "") {$("#month1").html("unknown").css('color', 'white');}  //Month change
			else if (month >= 0) {$("#month1").html("+" + month + symbol).css('color', '#11c536');}
			else {$("#month1").html(month + symbol).css('color', '#ea061f');};
		}
	);
}

//--------------------Bitcoin-------------------------//
function getRateBtc() {
	var hour, day, week, month, symbol, changeNotation, currency, symbolCur;
		// Currency selector //
		switch ($('select[name="select_cur"]').val()) {
		case "USD":
		currency = "USD";
		symbolCur = "&#36;";
		break;
		case "EUR":
		currency = "EUR";
		symbolCur = "&euro;";
		break;
		case "RUB":
		currency = "RUB";
		symbolCur = "&#8381;";
		break;
		case "GBP":
		currency = "GBP";
		symbolCur = "&pound;";
		break;
	}

	$.get(
		'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + currency,
		function(data) {
			// Switch state //
			if ($('input[name="switch2"]').prop("checked")) {
					changeNotation = "percent";
					symbol = "%";
				} else if (!$('input[name="switch2"]').prop("checked")) {
					changeNotation = "price";
					symbol = symbolCur;
			}

			hour = data.changes[changeNotation].hour;
			day = data.changes[changeNotation].day;
			week = data.changes[changeNotation].week;
			month = data.changes[changeNotation].month;

			$("#price2").html(symbolCur + data.ask); //Price
			
			if (hour === "") {$("#hour2").html("unknown").css('color', 'white');} // Hour change
			else if (hour >= 0) {$("#hour2").html("+" + hour + symbol).css('color', '#11c536');}
			else {$("#hour2").html(hour + symbol).css('color', '#ea061f');};

			if (day === "") {$("#day2").html("unknown").css('color', 'white');} //Day change
			else if (day >= 0) {$("#day2").html("+" + day + symbol).css('color', '#11c536');}
			else {$("#day2").html(day + symbol).css('color', '#ea061f');};

			if (week === "") {$("#week2").html("unknown").css('color', 'white');}  //Week change
			else if (week >= 0) {$("#week2").html("+" + week + symbol).css('color', '#11c536');}
			else {$("#week2").html(week + symbol).css('color', '#ea061f');};

			if (month === "") {$("#month2").html("unknown").css('color', 'white');}  //Month change
			else if (month >= 0) {$("#month2").html("+" + month + symbol).css('color', '#11c536');}
			else {$("#month2").html(month + symbol).css('color', '#ea061f');};
		}
	);
}


