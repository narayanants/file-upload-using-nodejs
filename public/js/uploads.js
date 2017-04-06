$('.upload-btn').on('click',function(){
	$('#upload-input').click();
	$('.progress-bar').text('0%');
	$('.progress-bar').width('0%');
});

$('#upload-input').on('change',function(){

	//add the selected files to the files array
	var files = $(this).get(0).files;

	//check for files length
	if(files.length > 0){
		// One or more files selected, process the file upload
		var formData = new FormData();
		for(var i=0; i<files.length; i++){
			var file = files[i];
			//append files as payload to form data
			formData.append('uploads[]',file,file.name);
		}
	}
});



