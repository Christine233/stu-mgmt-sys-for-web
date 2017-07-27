function getElements() {
    let stuInfoObj = {};
    // let stuInfoStr = '';
    let subScore = [];
    stuInfoObj.name = document.getElementById("inputName").value;
    stuInfoObj.stuId = document.getElementById("inputStuId").value;
    stuInfoObj.nation = document.getElementById("inputNation").value;
    stuInfoObj.class = document.getElementById("inputClass").value;
    stuInfoObj.chinese = document.getElementById("inputChinese").value;
    stuInfoObj.math = document.getElementById("inputMath").value;
    stuInfoObj.english = document.getElementById("inputEnglish").value;
    stuInfoObj.coding = document.getElementById("inputCoding").value;
    subScore.push(parseFloat(stuInfoObj.chinese));
    subScore.push(parseFloat(stuInfoObj.math));
    subScore.push(parseFloat(stuInfoObj.english));
    subScore.push(parseFloat(stuInfoObj.coding));
    stuInfoObj.totalScore = totalScore(subScore);
    stuInfoObj.avgScore = stuInfoObj.totalScore/subScore.length;
    // for(let index in stuInfoObj){
    //     stuInfoStr += stuInfoObj[index];
    // }
    alert(`"${stuInfoObj.name}"同学的成绩录入成功`);
    localStorage.setItem(`${stuInfoObj.stuId}`,JSON.stringify(stuInfoObj));
    // let newStuInfoObj = JSON.parse(localStorage.getItem(`${stuInfoObj.stuId}`));
    // addRow(newStuInfoObj);
    addRow(stuInfoObj);
}

// 计算总分
function totalScore(subScore) {
    let sum = 0;
    for (let i of subScore){
        sum += i;
    }
    return sum;
}

// 添加一行
function addRow(newStuInfoObj) {
    let tbody = document.getElementById('tbMain');
    let trow = getDataRow(newStuInfoObj); //定义一个方法,返回tr数据
    tbody.appendChild(trow);

    function getDataRow(newStuInfoObj) {
        let row = document.createElement('tr'); //创建行
        let nameCell = document.createElement('td'); //创建第一列name
        nameCell.innerHTML = newStuInfoObj.name; //填充数据
        row.appendChild(nameCell); //加入行
        let idCell = document.createElement('td');//创建第二列id
        idCell.innerHTML = newStuInfoObj.stuId;
        row.appendChild(idCell);
        let nationCell = document.createElement('td');//创建第三列nation
        nationCell.innerHTML = newStuInfoObj.nation;
        row.appendChild(nationCell);
        let classCell = document.createElement('td');//创建第四列class
        classCell.innerHTML = newStuInfoObj.class;
        row.appendChild(classCell);
        let chineseCell = document.createElement('td');//创建第五列chinese
        chineseCell.innerHTML = newStuInfoObj.chinese;
        row.appendChild(chineseCell);
        let mathCell = document.createElement('td');//创建第六列math
        mathCell.innerHTML = newStuInfoObj.math;
        row.appendChild(mathCell);
        let englishCell = document.createElement('td');//创建第七列english
        englishCell.innerHTML = newStuInfoObj.english;
        row.appendChild(englishCell);
        let codingCell = document.createElement('td');//创建第八列coding
        codingCell.innerHTML = newStuInfoObj.coding;
        row.appendChild(codingCell);
        let totalScorCell = document.createElement('td');//创建第九列sum
        totalScorCell.innerHTML = newStuInfoObj.totalScore;
        row.appendChild(totalScorCell);
        let avgScoreCell = document.createElement('td');//创建第十列avg
        avgScoreCell.innerHTML = newStuInfoObj.avgScore;
        row.appendChild(avgScoreCell);
        return row; //返回tr数据
    }
}

// 查询多个学生成绩信息
function searchStuInfo() {
    let stuId = document.getElementById("search").value;
    let stuIdArr = stuId.split(',');
    for(let stu of stuIdArr) {
        let searchStuInfoObj = {};
        for (let i = 0; i < localStorage.length; i++) {
            if(stu === localStorage.key(i)){
                searchStuInfoObj = localStorage.getItem(stu);

            }
            else{
                alert(`学号为${localStorage.getItem(stu)}的同学没有被录入`);
            }
        }
    }
}
