//
//  Intellitrust-Header.h
//  Plugin
//
//  Created by Brian Galeano on 21/07/23.
//  Copyright © 2023 Max Lynch. All rights reserved.
//
#ifndef Intellitrust_Header_h
#define Intellitrust_Header_h
#import <Foundation/Foundation.h>
#import "ETIdentity.h"
#import "ETIdentityProvider.h"
#import "ETSoftTokenSDK.h"
#import "ETTransaction.h"
#define transactionURL @"https://belizebank.us.trustedauth.com/api/mobile"

@interface IntellitrustO : NSObject
- (void)createNewSoftTokenIdentity:(CDVInvokedUrlCommand*)command;
- (void)getOTP:(CDVInvokedUrlCommand*)command;
- (void)deleteIdentity:(CDVInvokedUrlCommand*)command;
- (void)parseNotification:(CDVInvokedUrlCommand*)command;

/**
* Saves the current identity to disk.
* @param identity The identity to save.
* @return YES on success, NO otherwise.
*/
- (BOOL) saveIdentity:(ETIdentity *)identity;

/**
* Loads the identity from disk.
* @return The identity from disk or nil if no identity exists.
*/
- (ETIdentity *)loadIdentity;

/**
* Deletes the current identity file from disk.
* @return YES on success, false otherwise.
*/
- (BOOL) deleteIdentityFile;

@end

#endif /* Intellitrust_Header_h */
