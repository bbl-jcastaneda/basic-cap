import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(BasicPlugin)
public class BasicPlugin: CAPPlugin {
    private let implementation = Basic()

    @objc func echo(_ call: CAPPluginCall) {
        let name = call.getString("name") ?? "default Name"
        
        guard let id = call.options["id"] as? String else {
            call.reject("Must provide an id")
            return
          }
        call.resolve([
            "name": implementation.echo(name),
            "name2": name,
            "active": true
        ])
    }
}
