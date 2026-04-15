import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, catchError, throwError } from 'rxjs';

import { Login, SignUp } from '../graphql/user.queries';
import User from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
private readonly apollo = inject(Apollo)

private handleError(error: any) {
  console.error('GraphQL Error:', error);

  let errorMessage = 'Something went wrong. Please try again.';

  if (error?.graphQLErrors?.length) {
    errorMessage = error.graphQLErrors.map((e: any) => e.message).join(', ');
  } else if (error?.networkError) {
    errorMessage = 'Network error. Check your connection.';
  }

  return throwError(() => new Error(errorMessage));
  }

  login(email: string, password: string): Observable<User> {
    return this.apollo
      .query<any>({ query: Login, variables: {email, password} })
      .pipe(
        map((res) => {
          console.log('User found:', res);
          return res?.data?.login;
        }),
        catchError((error) => this.handleError(error))
      );
  }

   signUp(user: any): Observable<User> {
    return this.apollo
      .mutate({
        mutation: SignUp,
        variables: {
          username: user.username,
          email: user.email,
          password: user.password
        }
      })
      .pipe(
        map((res: any) => res.data.signUp),
        catchError((error) => this.handleError(error))
      );
  }
}
