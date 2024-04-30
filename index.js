import app from './src/config'
  //Server Port
  async function main() {
    try {
    
      //Server
      app.listen(app.get('port'),() => {
        console.log(`URL: http://localhost:${app.get('port')}/api`);
      });

    } catch (error) {
      console.error(error);
    }
  };
  
main();








