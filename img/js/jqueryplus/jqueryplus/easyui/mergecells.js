function mergeCellsField(tableID, field, colList) {
    var tTable = $(tableID);
    var colArray = colList.split(",");
    var TableRowCnts = tTable.datagrid("getRows").length;
    var index = 0;
    var tmpB = 0;
    var rowspan = 0;
    var perTxt = "";
    var curTxt = "";
    for (var i = 0; i < TableRowCnts; i++) { //重新排列所有行
        if (perTxt != tTable.datagrid("getRows")[i][field]) {
            perTxt = tTable.datagrid("getRows")[i][field]
            index = i;
            rowspan = 1;
            curTxt = perTxt;
            var rIndex = i;
            for (var j = (i + 1) ; j < TableRowCnts; j++) {
                //遍历从第I列向下所有数据
                if (curTxt == tTable.datagrid("getRows")[j][field]) {  //如果主列数据相同
                    if ((j - 1) != rIndex)//行不连续 移动行不连续部分
                    {
                        rIndex = rIndex + 1;
                        var row = tTable.datagrid("getRows")[j]
                        tTable.datagrid("deleteRow", j);
                        tTable.datagrid("insertRow", { index: rIndex, row: row });
                    }
                    rowspan++//重复行数
                }
            }
            if (rowspan > 1) //合并列
            {
                for (var j = 0; j < colArray.length; j++) {
                    tTable.datagrid("mergeCells", {
                        index: index,
                        field: colArray[j],　　//合并字段
                        rowspan: rowspan,
                        colspan: null
                    });
                }
            }
        }
    }
}

function mergeSort(sIndex, length, field, tTable) {
    var curTxt = "";
    for (var i = sIndex; i < length; i++) {

    }

}