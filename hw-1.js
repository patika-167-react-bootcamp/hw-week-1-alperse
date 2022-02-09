const folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 21, name: "foto.png" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

function move(sourceFileId, destinationFolderId) {
  let foundFlag = 0;
  let folderid = folders.findIndex((item) => item.id === destinationFolderId);
  if (folderid === -1) {
    console.log("ERROR: A folder with this id couldn't be found!");
    return false;
  } else {
    if (folders[folderid].files == null) {
      folders[folderid].files = [];
    }
    let fileid = folders[folderid].files.findIndex(
      (iter) => iter.id == sourceFileId
    );
    let i = 0;
    if (fileid === -1) {
      while (foundFlag === 0 && i < folders.length) {
        tmp = folders[i].files.findIndex((k) => k.id === sourceFileId);
        if (tmp != -1) {
          a = folders[i].files.splice(tmp, 1);
          folders[folderid].files.push(a);
          foundFlag = 1;
        } else {
          i++;
        }
      }
      if (foundFlag !== 1) {
        console.log("ERROR: A file with this id couldn't be found!");
        return false;
      }
    } else {
      console.log("ERROR: There is a file in that folder with the same file id!");
      return false;
    }
  }
}

function copy(sourceFileId, destinationFolderId) {
  let foundFlag = 0;
  let folderid = folders.findIndex((item) => item.id === destinationFolderId);
  if (folderid === -1) {
    console.log("ERROR: A folder with this id couldn't be found!");
    return false;
  } else {
    if (folders[folderid].files == null) {
      folders[folderid].files = [];
    }
    let fileid = folders[folderid].files.findIndex(
      (iter) => iter.id == sourceFileId
    );
    let i = 0;
    if (fileid === -1) {
      while (foundFlag === 0 && i < folders.length) {
        tmp = folders[i].files.findIndex((k) => k.id === sourceFileId);
        if (tmp != -1) {
          a = folders[i].files.slice(tmp, tmp + 1);
          folders[folderid].files.push(a);
          foundFlag = 1;
        } else {
          i++;
        }
      }
      if (foundFlag !== 1) {
        console.log("ERROR: A file with this id couldn't be found!");
        return false;
      }
    } else {
      console.log("ERROR: There is a file in that folder with the same file id!");
      return false;
    }
  }
}

function remove(sourceFileId) {
  let foundFlag = 0;
  let i = 0;
  while (foundFlag === 0 && i < folders.length) {
    if (folders[i].files != null) {
      tmp = folders[i].files.findIndex((k) => k.id === sourceFileId);
      if (tmp != -1) {
        a = folders[i].files.splice(tmp, 1);
        foundFlag = 1;
      } else {
        i++;
      }
    }
  }
  if (foundFlag !== 1) {
    console.log("ERROR: A file with this id couldn't be found!");
    return false;
  }
}

function removeFolder(sourceFolderId) {
  let folderindex = folders.findIndex((item) => item.id === sourceFolderId);
  if (folderindex === -1) {
    console.log("ERROR: A folder with this id couldn't be found!");
  } else {
    folders.splice(folderindex, 1);
  }
}

function parentFolderOf(sourceFileId) {
  let foundFlag = 0;
  let i = 0;
  while (foundFlag === 0 && i < folders.length) {
    if (folders[i].files != null) {
      tmp = folders[i].files.findIndex((k) => k.id === sourceFileId);
      if (tmp != -1) {
        foundFlag = 1;
        return console.log(
          `The folder of file ${sourceFileId} is ${folders[i].id}`
        );
      } else {
        i++;
      }
    }
  }
  if (foundFlag !== 1) {
    console.log("ERROR: A file with this id couldn't be found! ");
    return false;
  }
}

folders.forEach(function writeEverything(iterator) {
  if (iterator.files != null) {
    console.log(iterator.files);
  }
});
