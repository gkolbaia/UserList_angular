import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post: Post;


  constructor(
    private _postServise: PostService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._postServise.getPost(id).subscribe(post => {
      this.post = post;
    })


  }

}
