function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  function fetchData() {
    return delay(2000).then(() => {
      const randomData = Math.floor(Math.random() * 100) + 1;
      console.log(`Fetched data: ${randomData}`);
      return randomData;
    });
  }
  
  function processData(data) {
    return delay(1000).then(() => {
      const processedData = data * 2;
      console.log(`Processed data: ${processedData}`);
      return processedData;
    });
  }
  
  fetchData()
    .then((data) => processData(data))
    .then((finalResult) => {
      console.log(`Final result: ${finalResult}`);
    })
    .catch((error) => {
      console.error(`An error occurred: ${error}`);
    });
  