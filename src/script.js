const items = [
  { id: 1, name: "Truck", description: "Rob drives a truck" },
  { id: 2, name: "Car", description: "Lucy drives a car" },
  { id: 3, name: "Bicycle", description: "Adam rides his bicyle" },
  { id: 4, name: "Van", description: "Treena drives a van" },
];

let isGridView = false;

const toggleBtn = document.getElementById("toggleBtn");
const itemsContainer = document.getElementById("itemsContainer");

function renderItems() {
  itemsContainer.innerHTML = "";
  //tile view
  if (isGridView) {
    itemsContainer.className = "grid grid-cols-2 gap-4";
    toggleBtn.innerText = "Switch to List View";

    items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "p-4 shadow rounded text-center bg-white";
      itemDiv.innerHTML = `<h3 class="font-semibold">${item.name}</h3><p class="text-gray-600">${item.description}</p>`;
      itemsContainer.appendChild(itemDiv);
    });
  } else {
    //list view
    itemsContainer.className = "space-y-2";
    toggleBtn.innerText = "Switch to Tile View";

    items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className =
        "p-4 bg-white shadow rounded space-x-4 flex items-center";
      itemDiv.innerHTML = `<h3 class="font-semibold">${item.name}</h3><p class="text-gray-600">${item.description}</p>`;
      itemsContainer.appendChild(itemDiv);
    });
  }
}

function toggleView() {
  isGridView = !isGridView;
  renderItems();
}

renderItems();
