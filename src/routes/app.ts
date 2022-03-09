import  express from 'express';
import * as bodyParser from 'body-parser';
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers:any, port:number) {
    this.app = express();
    this.port = port;
    this.initializeControllers(controllers);
  }
 
 
  private initializeControllers(controllers:any) {
    controllers.forEach((controller:any) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;