function generateCertificate() {
    var name = document.getElementById('name').value;
    if (name.trim() === '') {
        alert('Please enter your name!');
        return;
    }

    var certificateDiv = document.getElementById('certificate');
    certificateDiv.innerHTML = '<h2>Certificate of Completion</h2>' +
                                '<p>This is to certify that</p>' +
                                '<h3>' + name + '</h3>' +
                                '<p>has successfully completed the course of Web Development</p>' +
                                '<p> On this Day, ' + new Date().toDateString() + '.</p>';
    certificateDiv.style.display = 'block';
}
