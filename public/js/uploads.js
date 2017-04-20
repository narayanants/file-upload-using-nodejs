$('.upload-btn').on('click',function(){
	$('#upload-input').click();
	$('.progressbar').text('0%');
	$('.progressbar').width('100%');
});

$('.upload-btn').on('change',function(){
	var files = $(this).get(0).files;
	if(files.length > 0){
		if(files.length > 0){
			// one or more file selected, process the selected files
			//create a formData object that will be sent as a payload using AJAX
			var formData = new FormData();

			//loop through the selected files
			for(var i=0;i<files.length;i++){
				var file = files[i];

				//add the file to formData object for the data payload
				formData.append('uploads[]',file,file.name);
			}
		}
	}
});

//AJAX request to send formData

$.ajax({
	url:'/upload',
	type:'POST',
	data:formData,
	processData:false,
	contentType:false,
	success:function(){
		console.log('upload successful!'+ data);
	},
	xhr:function(){
		//create an XMLHTTPRequest
		var xhr = new XMLHTTPRequest();

		xhr.upload.addEventListener('progress',function(){
			var percentComplete = evt.loaded / evt.total;
			percentComplete = parseInt(percentComplete * 100);

			//update the Bootstrap progress bar with the new percentage
			$('.progress-bar').text(percentComplete + '%');
			$('.progress-bar').width(percentComplete + '%');

			//once the upload reaches 100%, set the progress bar text to done
			if(percentComplete === 100){
				$('.progress-bar').html('done');
			}
		},false);
		return xhr;	
	}
}


$.ajax({
	url:'/upload',
	type:'POST',
	data:formData,
	processData:false,
	contentType:false,
	success:function(){
		console.log('upload successful!' + data);
	},
	xhr:function(){
		//create an XMLHTTPRequest
		var xhr = new XMLHTTPRequest();

		xhr.upload.addEventListener('progress',function(){
			var percentComplete = evt.loaded / evt.total;
			percentComplete = parseInt(percentComplete * 100);

			//update the BOotstrap progress bar with the new percentage
			$('.progress-bar').text(percentComplete + "'%");
			$('.progress-bar').width(percentComplete + "%");

			//once the upload reaches 100%,set the progress bar text to done
			if(percentComplete === 100){
				$('.progress-bar').html('done');
			}
		},false);
		return xhr;
	}
});


$.ajax({
	url:'/upload',
	type:'POST',
	data:formData,
	processData:false,
	contentType:false,
	success:function(){
		console.log('Upload successful');
	},
	xhr:function(){
		//create an XMLHTTPRequest
		var xhr = new XMLHTTPRequest();

		//create an progress event
		xhr.upload.addEventListener('progress',function(evt){

			var percentComplete = evt.loaded / evt.total;
			percentComplete = parseInt(percentComplete * 100);

			//check upload progress if it reaches 100%
			if(percentComplete === 100){
				$('.progress-bar').html('done');
			}
		},false);
		return xhr;
	}
});

