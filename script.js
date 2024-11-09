function selectBundle(bundleId, price) {
    const totalElement = document.getElementById("total");
    totalElement.innerText = `DKK ${price.toFixed(2)}`;

    // Hide all details sections first
    document.querySelectorAll('.details').forEach(detail => {
        detail.style.display = 'none';
    });

    // Show only the relevant details section for the selected bundle
    const selectedDetails = document.getElementById(`details${bundleId}`);
    if (selectedDetails) {
        selectedDetails.style.display = 'flex';
    }
}

function addToCart() {
    const selectedOption = document.querySelector('input[name="bundle"]:checked');
    if (!selectedOption) {
        alert("Please select a bundle first!");
        return;
    }

    const price = selectedOption.value;
    const discount = selectedOption.dataset.discount;

    alert(`Item added to cart! Total: DKK ${price} (Discount: ${discount}%)`);
}
