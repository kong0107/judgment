/// 把歷審裁判頁面的表格轉成 markdown
$$('table tr').map(row => '|' + [...row.children].map(cell => cell.textContent.trim()).join('|') + '|').join('\n');
