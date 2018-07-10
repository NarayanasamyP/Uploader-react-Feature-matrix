import * as React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import './App.css';
// samples
import { UploaderOnDemand } from './samples/uploader/On-demand-rendering';
import { DefaultUploader } from './samples/uploader/uploader-default';
import { UploaderDynamic } from './samples/uploader/uploader-dynamic-rendering'; // UploaderTemplate
import { UploaderTemplate } from './samples/uploader/uploader-template-support';
export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 left-pane">
              <div>
                <div className='control-list col-md-2'>
                  <div className="group-name">Uploader</div>
                  <Link className='e-btn e-flat e-primary items component' to="/uploader-default">Default</Link>
                  <Link className='e-btn e-flat e-primary items component' to="/uploader-dynamic-rendering">Dynamic-Rendering</Link>
                  <Link className='e-btn e-flat e-primary items component' to="/On-demand-rendering">OnDemand-Rendering</Link>
                  <Link className='e-btn e-flat e-primary items component' to="/uploader-template-support">Template Support</Link>
                </div>
                <div className="sample-section col-md-10">
                  <Route path="/uploader-default" component={DefaultUploader} />
                  <Route path="/uploader-dynamic-rendering" component={UploaderDynamic} />
                  <Route path="/On-demand-rendering" component={UploaderOnDemand} />
                  <Route path="/uploader-template-support" component={UploaderTemplate} />
                  {/* <Redirect from="/" to="/uploader-default" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
