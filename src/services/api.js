const KEY = '784541aa1f2844c0951222505220311';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
