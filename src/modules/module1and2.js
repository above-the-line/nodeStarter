"use strict";

export const exportedModule1 = "Hello from Module 1";

export async function exportedModule2() {
  const messageSend = await messageBuild();
  return "Message Built";
}

const messageBuild = () => {
  console.log("Building message");
};
