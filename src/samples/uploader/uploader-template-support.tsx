import { RemovingEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DialogComponent} from '@syncfusion/ej2-react-popups'
import * as React from 'react';
import '../../App.css';
import '../uploader/template.css';

export class UploaderTemplate extends React.Component<{}, {}> {
   public uploadObj: UploaderComponent;
   public dialogInstance: DialogComponent; 
 public listTemplate(data: any): JSX.Element {
     return (
     <span>
        <span className='fileListwrapper'>
        <span className= {`icon template-icons sf-icon-${data.type}`}/>
        <span className='upload-name file-name'>{data.name} ( {data.size} bytes )</span>
        <span id ="state" className='upload-status'>{data.status}</span></span>
        <span className='e-icons e-file-remove-btn' title='Remove'/>
     </span>
     )
 }
 
 public onUploadSuccess(args: any) : void {
   const li: HTMLElement = this.getLiElement(args);
   (li as any).querySelector('.upload-status').innerHTML = args.file.status;
   (li as any).querySelector('.upload-status').classList.add('upload-success');
 }
 public onUploadFailed(args: any) : void {
    const li: HTMLElement = this.getLiElement(args);
    (li as any).querySelector('.upload-status').innerHTML = args.file.status;
    (li as any).querySelector('.upload-status').classList.add('upload-failed');
 }
 public onUploadInProgress(args: any) : void {
    const progressValue : string = Math.round((args.e.loaded / args.e.total) * 100) + '%';
    const li: any = this.getLiElement(args);
    // li.querySelector('.upload-status').innerHTML = args.file.status + '(' + progressValue + ' )';
  li.querySelectorAll('.upload-status').innerHTML= args.file.status + '(' + progressValue + ' )';
 }
 public onSelect(args: any) : void {
    const allowedTypes: string[] = ['pdf', 'png', 'txt'];
    const modifiedFiles: object[] = [];
       for (const file of args.filesData) {  
           if (allowedTypes.indexOf(file.type.toLowerCase()) > -1) {
               modifiedFiles.push(file);
           }
       }
       if (modifiedFiles.length > 0) {
           args.isModified = true;
           args.modifiedFiles = modifiedFiles;
       } else { args.cancel = true; }
 }
 public getLiElement(args: any) {
       const liElements : NodeListOf<HTMLElement> = document.getElementsByClassName('e-upload')[0].querySelectorAll('.e-upload-files > li');
       let li : any;
       for (const i of [liElements.length-1]) {
           if ( liElements[i].getAttribute('data-file-name') === args.file.name ) {
            li = liElements[i];
           }
       }
       return (li);
 
   }
   public onRemoveFile(args: RemovingEventArgs): void {
       args.postRawFile = false;
   }
 public render() {
     return (
         <div className = 'control-pane'>
         <div className='control-section row uploadpreview'>
             <div className='col-lg-12 control-section upload-custom'> 
             <div className='customdrop_wrapper'>
             <div id="customdropArea">
             <h3> Uploader Template-Support </h3> <br />
             <UploaderComponent id='UploadFiles' type='file'
                 asyncSettings = {{
                    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
                    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save'
                     }} 
                 selected = { this.onSelect = this.onSelect.bind(this) }
                 removing= { this.onRemoveFile = this.onRemoveFile.bind(this)}
                 progress = { this.onUploadInProgress = this.onUploadInProgress.bind(this) }
                 success = { this.onUploadSuccess = this.onUploadSuccess.bind(this) }
                 failure = { this.onUploadFailed = this.onUploadFailed.bind(this) }
                 allowedExtensions ='.pdf, .png, .txt' template = {this.listTemplate as any} autoUpload = {false}/>
             </div>   
         </div>
         </div>
         </div>
         </div>)
     }
 
  }
