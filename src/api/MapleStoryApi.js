// const region = 'GMS'; // 國際
const region = 'TWMS'; // 台灣
const version = '217';
const apiEndpointBase = `https://maplestory.io/api/${region}/${version}`;
const apiEndpointMob = `${apiEndpointBase}/mob`;
const apiEndpointNpc = `${apiEndpointBase}/npc`;
const apiEndpointQuest = `${apiEndpointBase}/quest`;

async function baseRequest(url, methodType = 'GET') {
  const response = await fetch(url, {
    method: methodType,
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return response;
}

// Mob
async function GetMob(mobId) {
  const url = `${apiEndpointMob}/${mobId}`;
  const response = await baseRequest(url);
  return response.json();
}

async function GetMobAnimation(mobId, animation) {
  const url = `${apiEndpointMob}/animated/${mobId}/${animation}`;
  const response = await baseRequest(url);
  return response.blob();
}

// Npc
async function GetNpc(npcId) {
  const url = `${apiEndpointNpc}/${npcId}`;
  const response = await baseRequest(url);
  return response.json();
}

async function GetNpcIcon(npcId) {
  const url = `${apiEndpointNpc}/${npcId}/icon`;
  const response = await baseRequest(url);
  return response.blob();
}

async function GetNpcName(npcId) {
  const url = `${apiEndpointNpc}/${npcId}/name`;
  const response = await baseRequest(url);
  return response.json();
}

// Quest
async function GetQuest(questId) {
  const url = `${apiEndpointQuest}/${questId}`;
  const response = await baseRequest(url);
  return response.json();
}

export default {
  // Mob
  GetMob,
  GetMobAnimation,
  // Npc
  GetNpc,
  GetNpcIcon,
  GetNpcName,
  // Quest
  GetQuest,
};
