function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function readInput() {
	let number = document.getElementById('number_add').value;
	console.log(number, typeof(number))
	if(typeof(number) == 'number' && isNumber(number))
		return parseFloat(document.getElementById('number_add').value);
	else {
		alert('Bắt buộc phải là số.')
		return false
	}
}

function init(id, mid) {
    var insrc = id;
    initTree(insrc, parseInt(mid, 10));
    draw();
}

function initTree(insrc, m) {
    var bt = window.bt = new btree.BT(m, function(a, b) { return a < b ? -1 : a === b ? 0 : 1; });
    bt.root = btree.BN.prototype.fromJSON(bt, insrc);
}

function draw() {
    var dot = window.bt.root.toGraphViz();
    document.getElementById("content").innerHTML = Viz(dot, "svg");
}

function del(key) {
	if(key){
		window.bt.root.remove(key);
		draw();
	}
}

function ins(key) {
	if(key){
		window.bt.root.insert(key);
		draw();
	}
}
