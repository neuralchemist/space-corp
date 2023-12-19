import axios from "axios";

const ACTION_URL =
  "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum";

export async function actionOnSpectrum() {
  return await axios.get(ACTION_URL);
}
