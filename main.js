document.getElementById('app').innerHTML = `
<h1>ウィザードリィ ダフネ 辟邪除妖 Wizardry Variants Daphne</h1>
<div class="action-btns">
  <button id="exportBtn">匯出資料</button>
  <button id="importBtn">匯入資料</button>
  <input type="file" id="fileInput" accept="application/json" style="display:none;">
<div style="margin-top:8px;">
  <a id="weeklyGreenStoneBtn" href="https://store.wizardry.info/ja-JP" target="_blank" class="action-btn">每周綠石</a>
</div>
<h2 class="table-title">共通</h2>
<table id="commonTable">
  <thead>
    <tr>
      <th>名稱</th>
      <th>位置</th>
      <th>重生天數</th>
      <th>設定時間</th>
      <th>獲得時間</th>
      <th>重置時間</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>撿骨商人</td><td>隨機</td><td>7</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>打倒敵人箱子</td><td>隨機</td>
  <td><input class="cooldownInput" type="number" min="0" value="7" style="width:50px"></td><td>
    <button class="recordBtn">當前</button>
    <button class="recordBtn manualBtn">自選</button>
    <button class="recordBtn clearBtn">清除</button>
  </td>
  <td class="recordDate"></td>
  <td class="resetDate"></td>
</tr>
    <tr><td>心器</td><td>心器之淵</td><td>1</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>爐壺</td><td>靈廟</td>
      <td>
        <input class="cooldownInput" type="number" min="0" value="0" style="width:50px">
      </td>
      <td>
        <button class="recordBtn">當前</button>
        <button class="recordBtn manualBtn">自選</button>
        <button class="recordBtn clearBtn">清除</button>
      </td>
      <td class="recordDate"></td>
      <td class="resetDate"></td>
    </tr>
  </tbody>
</table>

<h2 class="table-title">第一章</h2>
<table id="chapter1TaskTable">
  <thead>
    <tr>
      <th>名稱</th>
      <th>位置</th>
      <th>重生天數</th>
      <th>設定時間</th>
      <th>獲得時間</th>
      <th>重置時間</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>甦醒後露露娜蒂骨頭</td><td>甦醒→主線</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>甦醒房間骨頭</td><td>甦醒→甦醒房間</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>1F骨頭</td><td>重新出發→死臭任務→1F</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>3F骨頭</td><td>重新出發→3F哥布林巢穴南</td><td>25</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>3F骨頭</td><td>重新出發→3F哥布林巢穴東北</td><td>25</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>4F骨頭</td><td>重新出發→4F西北</td><td>25</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>5F骨頭</td><td>重新出發→5F五毒沼</td><td>28</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>6F骨頭</td><td>重新出發→6F南</td><td>7</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>7F骨頭</td><td>重新出發→7F泉水東斷崖下寶箱</td><td>25</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>8F骨頭</td><td>重新出發→滋養藥旁</td><td>25</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
  </tbody>
</table>
<table id="chapter1ItemTable">
  <thead>
    <tr>
      <th>名稱</th>
      <th>位置</th>
      <th>重生天數</th>
      <th>設定時間</th>
      <th>獲得時間</th>
      <th>重置時間</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>8F滋養藥</td><td>重新出發→8F</td><td>1</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>劍鎬</td><td>重新出發→5F賊沒事→任務酒館→7F東北→回報</td><td>28</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
  </tbody>
</table>

<h2 class="table-title">第二章</h2>
<table id="chapter2TaskTable">
  <thead>
    <tr>
      <th>名稱</th>
      <th>位置</th>
      <th>重生天數</th>
      <th>設定時間</th>
      <th>獲得時間</th>
      <th>重置時間</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>B7骨頭</td><td>人魚傳說→B7水下</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
  </tbody>
</table>
<table id="chapter2ItemTable">
  <thead>
    <tr>
      <th>名稱</th>
      <th>位置</th>
      <th>重生天數</th>
      <th>設定時間</th>
      <th>獲得時間</th>
      <th>重置時間</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>2F滋養藥</td><td>人魚傳說→B2右下水龍頭水阻擋房間</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>身輕涼鞋</td><td>人魚傳說→B3右下機關房開關對面</td><td>14</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>マンイーター</td><td>人魚傳說→B5</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>水神の仮面</td><td>人魚傳說→B6</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>暴虐のカトラス</td><td>競技場5→打贏</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>聖堂加護</td><td>競技場5→教皇線完成</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>靈藥</td><td>歸還王都→船3</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
  </tbody>
</table>

<h2 class="table-title">第三章</h2>
<table id="chapter3TaskTable">
  <thead>
    <tr>
      <th>名稱</th>
      <th>位置</th>
      <th>重生天數</th>
      <th>設定時間</th>
      <th>獲得時間</th>
      <th>重置時間</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>カタコンベ</td><td>?</td><td>28</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
  </tbody>
</table>
<table id="chapter3ItemTable">
  <thead>
    <tr>
      <th>名稱</th>
      <th>位置</th>
      <th>重生天數</th>
      <th>設定時間</th>
      <th>獲得時間</th>
      <th>重置時間</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>常世百合</td><td>城塞地下到達→惡靈任務</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>どくろの首飾り</td><td>城塞地下到達→惡靈任務</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>エネミースコープ</td><td>城塞地下到達→任務禁域探索の護衛</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>魔製水晶</td><td>城塞地下到達→同上罪を知っている</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>山羊のマント</td><td>絵画の回廊の小ハーケン（6区B2F）</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>霊薬</td><td>9区</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>騎士のマント</td><td>凱旋→任務</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>金糸刺繍のハンカチーフ</td><td>凱旋→任務</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>忠勇なる盾兵の秘伝書</td><td>主線獎勵</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>聖白の輝石</td><td>主線獎勵</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>エレガントダンサー</td><td>主線獎勵</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
    <tr><td>煌めきの指環</td><td>モルグス 討伐報酬</td><td>30</td><td>
      <button class="recordBtn">當前</button>
      <button class="recordBtn manualBtn">自選</button>
      <button class="recordBtn clearBtn">清除</button>
    </td><td class="recordDate"></td><td class="resetDate"></td></tr>
  </tbody>
</table>

<div id="datetimeModal" style="display:none">
  <div style="text-align:center; margin-bottom:8px;">選擇獲得時間</div>
  <input type="datetime-local" id="modalDatetimeInput">
  <div style="margin-top:14px; text-align:center;">
    <button id="modalOkBtn">確定</button>
    <button id="modalCancelBtn">取消</button>
  </div>
</div>
<a href="https://wizardry-daphne.mcwild.net/item-log/" target="_blank">リポップ管理</a>
<br>
<a href="https://gamerch.com/wizardry-daphne/896951" target="_blank">【ウィズダフネ】遺骸や宝箱が復活する場所まとめ【ウィザードリィダフネ】</a>
<br>
<a href="https://wikiwiki.jp/wiz_daphne/%E5%86%8D%E5%85%A5%E6%89%8B%E5%8F%AF%E8%83%BD%E3%81%AA%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E4%B8%80%E8%A6%A7" target="_blank">再入手可能なアイテム一覧</a>
`
;


const tableIds = [
  "commonTable",
  "chapter1TaskTable",
  "chapter1ItemTable",
  "chapter2TaskTable",
  "chapter2ItemTable",
  "chapter3TaskTable",
  "chapter3ItemTable"
];
const storageKey = 'cooldownData';

// 取得 cooldown days
function getCooldownDays(row) {
  // 支援爐壺與打倒敵人箱子
  if (
    (row.cells[0].textContent.trim() === "爐壺" ||
     row.cells[0].textContent.trim() === "打倒敵人箱子") &&
    row.cells[2].querySelector('.cooldownInput')
  ) {
    return parseInt(row.cells[2].querySelector('.cooldownInput').value, 10) || 0;
  }
  return parseInt(row.cells[2].textContent.trim(), 10) || 0;
}

// 只存 recordDate/resetDate (爐壺多 cooldownDays)
function getTableData() {
  return tableIds.map(tid => {
    const rows = document.getElementById(tid).querySelectorAll('tbody tr');
    return Array.from(rows).map(row => {
      const name = row.cells[0].textContent.trim();
      const isCooldownInput = (name === "爐壺" || name === "打倒敵人箱子");
      return {
        recordDate: row.querySelector('.recordDate').textContent.trim(),
        resetDate: row.querySelector('.resetDate').textContent.trim(),
        ...(isCooldownInput ? { cooldownDays: row.cells[2].querySelector('.cooldownInput').value } : {})
      };
    });
  });
}
function setTableData(data) {
  tableIds.forEach((tid, i) => {
    const rows = document.getElementById(tid).querySelectorAll('tbody tr');
    if (!data[i]) return;
    rows.forEach((row, j) => {
      if (!data[i][j]) return;
      row.querySelector('.recordDate').textContent = data[i][j].recordDate || '';
      row.querySelector('.resetDate').textContent = data[i][j].resetDate || '';
      // 爐壺或打倒敵人箱子有 cooldownInput
      if (
        (row.cells[0].textContent.trim() === "爐壺" ||
         row.cells[0].textContent.trim() === "打倒敵人箱子") &&
        row.cells[2].querySelector('.cooldownInput') &&
        "cooldownDays" in data[i][j]
      ) {
        row.cells[2].querySelector('.cooldownInput').value = data[i][j].cooldownDays;
      }
      updateResetDateColor(row.querySelector('.resetDate'));
    });
  });
}

function formatDate(date) {
  const pad = n => n.toString().padStart(2, '0');
  return date.getFullYear() + '-' +
    pad(date.getMonth() + 1) + '-' +
    pad(date.getDate()) + ' ' +
    pad(date.getHours()) + ':' +
    pad(date.getMinutes()) + ':' +
    pad(date.getSeconds());
}
function updateResetDateColor(resetDateCell) {
  const now = new Date();
  const resetText = resetDateCell.textContent.trim();
  resetDateCell.classList.remove('green-text', 'red-text');
  if (!resetText) return;
  const resetDate = new Date(resetText.replace(' ', 'T'));
  if (isNaN(resetDate)) return;
  const diffMs = resetDate - now;
  const diffHours = diffMs / (1000 * 60 * 60);
  if (diffMs <= 0) {
    resetDateCell.classList.add('red-text');
  } else if (diffHours <= 72) {
    resetDateCell.classList.add('green-text');
  }
}
function loadData() {
  const dataJson = localStorage.getItem(storageKey);
  if (!dataJson) return;
  const data = JSON.parse(dataJson);
  setTableData(data);
}
function saveData() {
  localStorage.setItem(storageKey, JSON.stringify(getTableData()));
}
function setupButtons() {
  tableIds.forEach(tid => {
    // 當前
    document.getElementById(tid).querySelectorAll('.recordBtn:not(.manualBtn):not(.clearBtn)').forEach(button => {
      button.onclick = function() {
        const row = button.closest('tr');
        const now = new Date();
        const recordDateCell = row.querySelector('.recordDate');
        recordDateCell.textContent = formatDate(now);

        const cdDays = getCooldownDays(row);
        if (isNaN(cdDays)) {
          alert('重生天數不是有效數字！');
          return;
        }

        const resetDate = new Date(now);
        resetDate.setDate(resetDate.getDate() + cdDays);
        const resetDateCell = row.querySelector('.resetDate');
        resetDateCell.textContent = formatDate(resetDate);

        updateResetDateColor(resetDateCell);
        saveData();
      };
    });
    // 自選
    document.getElementById(tid).querySelectorAll('.recordBtn.manualBtn').forEach(button => {
      button.onclick = function() {
        window.currentRowForDatetime = button.closest('tr');
        const modal = document.getElementById('datetimeModal');
        const input = document.getElementById('modalDatetimeInput');
        const now = new Date();
        const pad = n => n.toString().padStart(2, '0');
        input.value =
          now.getFullYear() + '-' +
          pad(now.getMonth() + 1) + '-' +
          pad(now.getDate()) + 'T' +
          pad(now.getHours()) + ':' +
          pad(now.getMinutes());
        modal.style.display = 'block';
        input.focus();
      };
    });
    // 清除
    document.getElementById(tid).querySelectorAll('.recordBtn.clearBtn').forEach(button => {
      button.onclick = function() {
        const row = button.closest('tr');
        row.querySelector('.recordDate').textContent = '';
        row.querySelector('.resetDate').textContent = '';
        updateResetDateColor(row.querySelector('.resetDate'));
        saveData();
      };
    });
    // 爐壺 cooldown input 變更時即時存檔
    if (tid === "commonTable") {
      document.querySelectorAll('#commonTable .cooldownInput').forEach(input => {
        // 先移除舊的監聽，避免重複
        input.removeEventListener('input', saveData);
        input.addEventListener('input', saveData);
      });
    }
  });
}

document.getElementById('modalOkBtn').onclick = function() {
  if (!window.currentRowForDatetime) return;
  const input = document.getElementById('modalDatetimeInput');
  if (!input.value) return;
  const selected = new Date(input.value);
  if (isNaN(selected)) {
    alert('時間格式錯誤');
    return;
  }
  const recordDateCell = window.currentRowForDatetime.querySelector('.recordDate');
  recordDateCell.textContent = formatDate(selected);

  const cdDays = getCooldownDays(window.currentRowForDatetime);
  if (isNaN(cdDays)) {
    alert('重生天數不是有效數字！');
    return;
  }
  const resetDate = new Date(selected);
  resetDate.setDate(resetDate.getDate() + cdDays);
  const resetDateCell = window.currentRowForDatetime.querySelector('.resetDate');
  resetDateCell.textContent = formatDate(resetDate);

  updateResetDateColor(resetDateCell);
  saveData();
  document.getElementById('datetimeModal').style.display = 'none';
  window.currentRowForDatetime = null;
};
document.getElementById('modalCancelBtn').onclick = function() {
  document.getElementById('datetimeModal').style.display = 'none';
  window.currentRowForDatetime = null;
};
window.addEventListener('mousedown', function(e){
  const modal = document.getElementById('datetimeModal');
  if(modal.style.display==="block" && !modal.contains(e.target)){
    modal.style.display = "none";
    window.currentRowForDatetime = null;
  }
});

window.addEventListener('load', () => {
  loadData();
  setupButtons();
  tableIds.forEach(tid => {
    document.getElementById(tid).querySelectorAll('.resetDate').forEach(td => updateResetDateColor(td));
  });
});

tableIds.forEach(tid => {
  document.getElementById(tid).addEventListener('input', function(e) {
    const row = e.target.closest('tr');
    if (row) {
      const resetDateCell = row.querySelector('.resetDate');
      updateResetDateColor(resetDateCell);
      saveData();
    }
  });
});

document.getElementById('exportBtn').addEventListener('click', () => {
  const data = getTableData();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], {type: "application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const now = new Date();
  a.href = url;
  a.download = "wizardry-cooldown-" + formatDate(now).replace(/[: ]/g, "_") + ".json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

const fileInput = document.getElementById('fileInput');
document.getElementById('importBtn').addEventListener('click', () => {
  fileInput.value = "";
  fileInput.click();
});
fileInput.addEventListener('change', function() {
  if (!fileInput.files.length) return;
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      // 只接受動態資料格式（不存名稱/位置/重生天數）
      if (!Array.isArray(data) || data.length !== tableIds.length || !data.every(
          arr => Array.isArray(arr) && arr.every(
            d => typeof d === 'object'
              && "recordDate" in d
              && "resetDate" in d
          )
        )) {
        throw new Error("資料結構不正確");
      }
      setTableData(data);
      saveData();
      setupButtons();
      alert("還原成功！");
    } catch (err) {
      alert("檔案內容格式錯誤，無法還原！");
    }
  };
  reader.readAsText(file, "utf-8");
});
// ====== 每60秒自動刷新所有重置時間的顏色 ======
setInterval(() => {
  tableIds.forEach(tid => {
    document.getElementById(tid).querySelectorAll('.resetDate').forEach(td => updateResetDateColor(td));
  });
}, 60000); // 每60秒刷新一次顏色