const getStatusPoints = () => {
  const points = document.getElementById("calc_status").value;
  document.getElementById("calc_status_points").innerText = points;
  updateTotalPoints();
};
const getEarningsPoints = () => {
  const points = document.getElementById("calc_earnings").value;
  document.getElementById("calc_earnings_points").innerText = points;
  updateTotalPoints();
};
const getEducationPoints = () => {
  const points = document.getElementById("calc_education").value;
  document.getElementById("calc_education_points").innerText = points;
  updateTotalPoints();
};
const getFieldStudyPoints = () => {
  const points = document.getElementById("calc_study_field").value;
  document.getElementById("calc_study_field_points").innerText = points;
  updateTotalPoints();
};
const getEducationCountPoints = () => {
  const points = document.getElementById("calc_cred").value;
  document.getElementById("calc_cred_points").innerText = points;
  updateTotalPoints();
};
const getlLanguageCountPoints = () => {
  const points = document.getElementById("calc_lang_count").value;
  document.getElementById("calc_lang_count_points").innerText = points;
  updateTotalPoints();
};
const getCLBPoints = () => {
  const points = document.getElementById("calc_clb").value;
  document.getElementById("calc_clb_points").innerText = points;
  updateTotalPoints();
};
const getLocationPoints = () => {
  const points = document.getElementById("calc_location").value;
  document.getElementById("calc_location_points").innerText = points;
  updateTotalPoints();
};

const updateTotalPoints = () => {
  let points = [];
  points[0] = document.getElementById("calc_status_points").innerText;
  points[1] = document.getElementById("calc_earnings_points").innerText;
  points[2] = document.getElementById("calc_education_points").innerText;
  points[3] = document.getElementById("calc_study_field_points").innerText;
  points[4] = document.getElementById("calc_cred_points").innerText;
  points[5] = document.getElementById("calc_lang_count_points").innerText;
  points[6] = document.getElementById("calc_clb_points").innerText;
  points[7] = document.getElementById("calc_location_points").innerText;

  let total_points = 0;

  for (let i = 0; i < points.length; i++) {
    console.log(points[i]);
    points[i] = parseInt(points[i]);
    total_points += points[i];
  }
  document.getElementById("calc_total_points").innerText = total_points;
};
