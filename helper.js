export function formatLyricTest(data) {
  let questions = [];

  try {
    if (typeof data === "string") {
      data = data.replace(/```json/g, "").replace(/```/g, "");

      questions = JSON.parse(data);
    } else {
      questions = data;
    }
  } catch (error) {
    console.error("Erro ao fazer o parse do JSON:", error);
    return [];
  }

  return questions;
}
