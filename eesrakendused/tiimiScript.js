$('#jargmineBtn').click(function(){
    $('#liikmeNimi').html("Karl Piiber");
    $('#marksona').html("Senior Sofware Engineer High Commander General Apropriation Executive Manager From the State Chicago").slideDown(1000);
    $('#jargmineBtn').prop( "disabled", true );
    $('#eelmineBtn').prop( "disabled", false );
});

$('#eelmineBtn').click(function(){
    $('#liikmeNimi').html("Kevin Rosenberg");
    $('#marksona').html("Sales Executive Manager Impostor");
    $('#jargmineBtn').prop( "disabled", false);
    $('#eelmineBtn').prop( "disabled", true);
});
