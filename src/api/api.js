const region = 'GMS';
const version = '217';
const apiEndpointBase = `https://maplestory.io/api/${region}/${version}`;
const apiEndpointMob = `${apiEndpointBase}/mob`;

async function GetMob(mobId) {
  const response = await fetch(`${apiEndpointMob}/${mobId}`, { method: 'get' });
  const data = await response.json();
  return data;
}

export default { GetMob };
