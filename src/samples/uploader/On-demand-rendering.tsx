import { Uploader } from '@syncfusion/ej2-react-inputs';
// import { DialogComponent} from '@syncfusion/ej2-react-popups'
import * as React from 'react';
import '../../App.css';


export class UploaderOnDemand extends React.Component<{}, {}> {
    public uploaderObj: Uploader;
    public componentDidMount(): void {
        this.uploaderObj = new Uploader({
            asyncSettings: {
                removeUrl: 'http://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
                saveUrl: 'http://aspnetmvc.syncfusion.com/services/api/uploadbox/Save'
            }
        });
        this.uploaderObj.appendTo('#fileupload');
    }
  public render() {
return (<div className='control-pane'>
    <div className='control-section' id="rte">
        <div className='rte-control-section'>
        <h3> Uploader Rendered Ondemand </h3> <br />
        <input type='file' id='fileupload' name='UploadFiles'/>        
        </div>
    </div>
</div>
    );
  }
  }