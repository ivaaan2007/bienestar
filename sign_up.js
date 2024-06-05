function toggleFaculties() {
    var facultiesList = document.getElementById('facultiesList');
    if (document.getElementById('faculty').checked) {
        facultiesList.style.display = 'block';
    } else {
        facultiesList.style.display = 'none';
    }
}