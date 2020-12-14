const constValue = require('./constant');

function convertDegToRad(deg) {
  return deg * (Math.PI / 180);
}

function getDistancebyLatLong(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth Radius KM
  const dLat = convertDegToRad(lat2 - lat1);
  const dLon = convertDegToRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(convertDegToRad(lat1)) * Math.cos(convertDegToRad(lat2))
    * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

function sortAndParseClientInformationToOutput(clientToInviteList) {
  return clientToInviteList
    .sort((a, b) => a.user_id - b.user_id)
    .map((client) => ({ user_id: client.user_id, name: client.name }));
}

exports.getCustomersInsideRange = (
  customersList,
  officeLat = constValue.DUBLIN_OFFICE_LAT,
  officeLong = constValue.DUBLIN_OFFICE_LONG,
  officeDistance = constValue.DEFAULT_DISTANCE,
) => {
  if (customersList) {
    const clientsToInvite = customersList.filter((client) => {
      const clientDistanceFromOffice = getDistancebyLatLong(
        officeLat,
        officeLong,
        parseInt(client.latitude, 10),
        parseInt(client.longitude, 10),
      );
      return clientDistanceFromOffice <= officeDistance;
    });
    return sortAndParseClientInformationToOutput(clientsToInvite);
  }
  return [];
};
