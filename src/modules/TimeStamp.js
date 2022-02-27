const getCurrentTime = (milliseconds) => {
    const today = new Date(milliseconds);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    return `${month}/${day}/${year}/${hour}/${minute}/${second}`;
  };