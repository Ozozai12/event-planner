const dateFormatHandler = date => {
  if (date) {
    return date.slice(0, 5);
  }
  return;
};

export default dateFormatHandler;
