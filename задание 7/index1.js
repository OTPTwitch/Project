let rod = [
    {
        label: 'Родитель 1',
    },
    {
        label: "Родитель 2",
    },
    {
        label: "Родитель 3",
    },
    {
        label: "Родитель 4",
    },
    {
        label: "Родитель 5",
    }
]
function createSelectEl(rod, str) {
  const main = document.body;
  const select = main.appendChild(document.createElement('select'));
  rod.forEach(function(el) {
    const option = document.createElement('option');
    option.value = el.value;
    option.innerHTML = el.label;
    select.appendChild(option)
    if (option.value === str) {
      option.setAttribute('selected', true);
    }
  });
  return select
}
createSelectEl(rod)