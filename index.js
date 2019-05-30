const URL = 'https://trektravel.herokuapp.com/trips'

// Status Management
const displayStatus = (message) => {
  $('#status').html(message);
}

const handleApiError = (error) => {
  console.log(error);
  // TODO: politely report this error to the user
}

// Loading Trips
const loadTrips = () => {
  displayStatus("loading trips...");

  const tripList = $('#trip-list');
  tripList.empty();

  axios.get(URL)
    .then((response) => {
      displayStatus(`Successfully loaded ${response.data.length} trips.`);

      response.data.forEach((trip) => {
        tripList.append(`<li>${trip.name}</li>`);
      });
    })
    .catch((error) => {
      displayStatus(`Encountered an error while loading trips: ${error.message}`);
      console.log(error);
    })
};

const showTripDetails = (trip) => {
  console.log("showing details for trip", trip);

  // TODO: Wave 2
  // display trip details and the trip reservation form
}

const reserveTrip = (trip) => {
  console.log("reserving trip", trip)

  // TODO: Wave 2
  // reserve a spot on the trip when the form is submitted
}

$(document).ready(() => {
  $('#load-trips').click(loadTrips);
});