import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-kanban-board',
    templateUrl: './kanban-board.component.html',
    styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
    columns = [{
        name: 'To Do',
        cards: [{
            id: 1,
            name: 'daskdja'
        }, {
            id: 2,
            name: 'makdsldma'
        }, {
            id: 3,
            name: 'sdpasmd'
        }]
    }, {
        name: 'In Progress',
        cards: [{
            id: 4,
            name: 'kasmdkas'
        }, {
            id: 5,
            name: 'oid2n'
        }]
    }, {
        name: 'Done',
        cards: [{
            id: 6,
            name: 'dqoiin21'
        }, {
            id: 7,
            name: 'damdq2'
        }]
    }]

    getLastTaskId(): number {
        let lastId = 0
        this.columns.forEach(col => col.cards.forEach(card => {
            if (card.id > lastId)
                lastId = card.id
        }))
        return lastId
    }

    newTask(event: Event, index: number) {
        console.log(index)
        event.stopPropagation()
        const newTask = {
            id: this.getLastTaskId() + 1,
            name: 'New Task'
        }
        this.columns[index].cards.push({ ...newTask })
    }

    isResizing = false;
    isDragging = false;

    onResizeStarted() {
        this.isResizing = true;
    }

    onResizeEnded() {
        this.isResizing = false;
    }

    onDragStarted() {
        this.isDragging = true;
    }

    onDragEnded(event: CdkDragEnd) {
        this.isDragging = false;
        // Save the new position if needed
    }

}