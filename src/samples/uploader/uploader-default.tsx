import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
// import { DialogComponent} from '@syncfusion/ej2-react-popups'
import * as React from 'react';
import '../../App.css';


export class DefaultUploader extends React.Component<{}, {}> {
  public path = {
    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save'
  }
  public render() {
return (<div className='control-pane'>
    <div className='control-section' id="rte">
        <div className='rte-control-section'>
        <h3> Uploader Simple Rendering </h3> <br />
        <UploaderComponent autoUpload={false} asyncSettings={this.path} />
        </div>
    </div>
</div>
    );
  }
  }
