import React, {Component} from 'react';
import './SomeComponent';

class ReadWrite extends Component{
    // constructor() {
    //     super();
    //     const fs = require('fs');
    //     fs.readFile('task.txt', 'utf8', function(error, data) {
    //         fs.writeFile('writeme.txt', data);
    //       });
    
    //   }


    render() { 
           
        return (
            <div>
                <h1>Its my cpomponent read write</h1>
                
            </div>
        )
    }

};

export default ReadWrite;






// const ImportFromFileBodyComponent =()=>{ let fileReader;
    
    //     const handleFileRead = (e) => {
    //     const content = fileReader.result; console.log(content);
    //         // .. do something with the 'content' _
    //     };
    //     const handleFileChosen = (file) => { 
    //         fileReader = new FileReader(); 
    //         fileReader.onloadend = handleFileRead; 
    //         fileReader.readAsText(file);
    //     return (
    //     <div>
    //     <div className='upload-expense'>
        
    //     <input 
    //     type='file' 
    //     id='file'    
    //     className='input-file' 
    //     accept='.csv'
    //     onChange={e => handleFileChosen(e.target.files[0])}
    //     />
    
    //     </div>
    //     </div>
    //     )
    //     };
    // };   
    
    // export default ImportFromFileBodyComponent;