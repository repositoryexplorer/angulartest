import { Component } from '@angular/core';
import { FlatBucket, TreeTestService} from '../../services/treetest.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-bucketsgrid',
  templateUrl: './bucketsgrid.component.html',
  styleUrls: ['./bucketsgrid.component.scss'],
  preserveWhitespaces: true,
})
export class BucketsgridComponent {
  bucketsFlatList: Array<FlatBucket>;
  allowDropInsideItem: boolean = false;
  allowReordering: boolean = true;
  showDragIcons: boolean = true;
  constructor(service: TreeTestService, private cookieService: CookieService) {
    this.bucketsFlatList = service.getFlatBuckets();
    this.onReorder = this.onReorder.bind(this);
  }

  onDragChange(e) {
    let visibleRows = e.component.getVisibleRows(),
      sourceNode = e.component.getNodeByKey(e.itemData.id),
      targetNode = visibleRows[e.toIndex].node;

    while(targetNode && targetNode.data) {
      if (targetNode.data.id === sourceNode.data.id) {
        e.cancel = true;
        break;
      }
      targetNode = targetNode.parent;
    }
  }

  onReorder(e) {
    let visibleRows =  e.component.getVisibleRows(),
      sourceData = e.itemData,
      targetData = visibleRows[e.toIndex].data;

    if (e.dropInsideItem) {
      e.itemData.parentId = targetData.id;
      e.component.refresh();
    } else {
      let sourceIndex = this.bucketsFlatList.indexOf(sourceData),
        targetIndex = this.bucketsFlatList.indexOf(targetData);

      if (sourceData.parentId !== targetData.parentId) {
        sourceData.parentId = targetData.parentId;
        if (e.toIndex > e.fromIndex) {
          targetIndex++;
        }
      }

      this.bucketsFlatList.splice(sourceIndex, 1);
      this.bucketsFlatList.splice(targetIndex, 0, sourceData);
    }
  }

  onDragStart(event: DragEvent, data: any) {

    // Set the drag's format and data. Use the event target's id for the data
    //ev.dataTransfer.setData("text/plain", ev.target.id);

   this.cookieService.set("droppedData", data.id + "|" + data.text);
  }
}
