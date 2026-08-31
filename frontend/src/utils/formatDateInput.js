export const formatDateInput = (date) => {
  if (!date) return "";

  return date.split("T")[0];
};
