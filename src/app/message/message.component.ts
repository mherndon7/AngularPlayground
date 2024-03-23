import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
