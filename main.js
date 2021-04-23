const allItems = document.querySelectorAll('.item');

const itemRevealer = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    entry.target.classList.remove('hidden');
};

const revealConditions = {
    root: null,
    threshold: 0.2,
};

const itemObserver = new IntersectionObserver(itemRevealer, revealConditions);

allItems.forEach((item) => {
    itemObserver.observe(item);
    item.classList.add('hidden');
});
