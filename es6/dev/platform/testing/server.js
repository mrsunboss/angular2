import { APP_ID, DirectiveResolver, NgZone, Provider, ViewResolver, PLATFORM_COMMON_PROVIDERS, PLATFORM_INITIALIZER, APPLICATION_COMMON_PROVIDERS } from 'angular2/core';
import { Parse5DomAdapter } from 'angular2/src/platform/server/parse5_adapter';
import { AnimationBuilder } from 'angular2/src/animate/animation_builder';
import { MockAnimationBuilder } from 'angular2/src/mock/animation_builder_mock';
import { MockDirectiveResolver } from 'angular2/src/mock/directive_resolver_mock';
import { MockViewResolver } from 'angular2/src/mock/view_resolver_mock';
import { MockLocationStrategy } from 'angular2/src/mock/mock_location_strategy';
import { LocationStrategy } from 'angular2/src/router/location_strategy';
import { MockNgZone } from 'angular2/src/mock/ng_zone_mock';
import { TestComponentBuilder } from 'angular2/src/testing/test_component_builder';
import { XHR } from 'angular2/src/compiler/xhr';
import { BrowserDetection } from 'angular2/src/testing/utils';
import { COMPILER_PROVIDERS } from 'angular2/src/compiler/compiler';
import { DOCUMENT } from 'angular2/src/platform/dom/dom_tokens';
import { DOM } from 'angular2/src/platform/dom/dom_adapter';
import { RootRenderer } from 'angular2/src/core/render/api';
import { DomRootRenderer, DomRootRenderer_ } from 'angular2/src/platform/dom/dom_renderer';
import { DomSharedStylesHost } from 'angular2/src/platform/dom/shared_styles_host';
import { EventManager, EVENT_MANAGER_PLUGINS, ELEMENT_PROBE_PROVIDERS } from 'angular2/platform/common_dom';
import { DomEventsPlugin } from 'angular2/src/platform/dom/events/dom_events';
import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Log } from 'angular2/src/testing/utils';
function initServerTests() {
    Parse5DomAdapter.makeCurrent();
    BrowserDetection.setup();
}
/**
 * Default patform providers for testing.
 */
export const TEST_SERVER_PLATFORM_PROVIDERS = CONST_EXPR([
    PLATFORM_COMMON_PROVIDERS,
    new Provider(PLATFORM_INITIALIZER, { useValue: initServerTests, multi: true })
]);
function appDoc() {
    try {
        return DOM.defaultDoc();
    }
    catch (e) {
        return null;
    }
}
/**
 * Default application providers for testing.
 */
export const TEST_SERVER_APPLICATION_PROVIDERS = CONST_EXPR([
    // TODO(julie): when angular2/platform/server is available, use that instead of making our own
    // list here.
    APPLICATION_COMMON_PROVIDERS,
    COMPILER_PROVIDERS,
    new Provider(DOCUMENT, { useFactory: appDoc }),
    new Provider(DomRootRenderer, { useClass: DomRootRenderer_ }),
    new Provider(RootRenderer, { useExisting: DomRootRenderer }),
    EventManager,
    new Provider(EVENT_MANAGER_PLUGINS, { useClass: DomEventsPlugin, multi: true }),
    new Provider(XHR, { useClass: XHR }),
    new Provider(APP_ID, { useValue: 'a' }),
    DomSharedStylesHost,
    ELEMENT_PROBE_PROVIDERS,
    new Provider(DirectiveResolver, { useClass: MockDirectiveResolver }),
    new Provider(ViewResolver, { useClass: MockViewResolver }),
    Log,
    TestComponentBuilder,
    new Provider(NgZone, { useClass: MockNgZone }),
    new Provider(LocationStrategy, { useClass: MockLocationStrategy }),
    new Provider(AnimationBuilder, { useClass: MockAnimationBuilder }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvcGxhdGZvcm0vdGVzdGluZy9zZXJ2ZXIudHMiXSwibmFtZXMiOlsiaW5pdFNlcnZlclRlc3RzIiwiYXBwRG9jIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFFBQVEsRUFDUixZQUFZLEVBQ1oseUJBQXlCLEVBQ3pCLG9CQUFvQixFQUNwQiw0QkFBNEIsRUFFN0IsTUFBTSxlQUFlO09BQ2YsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZDQUE2QztPQUVyRSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0NBQXdDO09BQ2hFLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQ0FBMEM7T0FDdEUsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQztPQUN4RSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0NBQXNDO09BQzlELEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQ0FBMEM7T0FDdEUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVDQUF1QztPQUMvRCxFQUFDLFVBQVUsRUFBQyxNQUFNLGdDQUFnQztPQUVsRCxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNkNBQTZDO09BQ3pFLEVBQUMsR0FBRyxFQUFDLE1BQU0sMkJBQTJCO09BQ3RDLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEI7T0FFcEQsRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdDQUFnQztPQUMxRCxFQUFDLFFBQVEsRUFBQyxNQUFNLHNDQUFzQztPQUN0RCxFQUFDLEdBQUcsRUFBQyxNQUFNLHVDQUF1QztPQUNsRCxFQUFDLFlBQVksRUFBQyxNQUFNLDhCQUE4QjtPQUNsRCxFQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHdDQUF3QztPQUNqRixFQUFDLG1CQUFtQixFQUFDLE1BQU0sOENBQThDO09BRXpFLEVBQ0wsWUFBWSxFQUNaLHFCQUFxQixFQUNyQix1QkFBdUIsRUFDeEIsTUFBTSw4QkFBOEI7T0FDOUIsRUFBQyxlQUFlLEVBQUMsTUFBTSw2Q0FBNkM7T0FFcEUsRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FFNUMsRUFBQyxHQUFHLEVBQUMsTUFBTSw0QkFBNEI7QUFFOUM7SUFDRUEsZ0JBQWdCQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtJQUMvQkEsZ0JBQWdCQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtBQUMzQkEsQ0FBQ0E7QUFFRDs7R0FFRztBQUNILGFBQWEsOEJBQThCLEdBQTJDLFVBQVUsQ0FBQztJQUMvRix5QkFBeUI7SUFDekIsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztDQUM3RSxDQUFDLENBQUM7QUFFSDtJQUNFQyxJQUFJQSxDQUFDQTtRQUNIQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtJQUMxQkEsQ0FBRUE7SUFBQUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDWEEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7QUFDSEEsQ0FBQ0E7QUFFRDs7R0FFRztBQUNILGFBQWEsaUNBQWlDLEdBQzFDLFVBQVUsQ0FBQztJQUNULDhGQUE4RjtJQUM5RixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLENBQUM7SUFDNUMsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFDLENBQUM7SUFDM0QsSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUMsV0FBVyxFQUFFLGVBQWUsRUFBQyxDQUFDO0lBQzFELFlBQVk7SUFDWixJQUFJLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzdFLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQztJQUNsQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLENBQUM7SUFDckMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO0lBQ2xFLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0lBQ3hELEdBQUc7SUFDSCxvQkFBb0I7SUFDcEIsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO0lBQzVDLElBQUksUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFDLENBQUM7SUFDaEUsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztDQUNqRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSUQsXG4gIERpcmVjdGl2ZVJlc29sdmVyLFxuICBOZ1pvbmUsXG4gIFByb3ZpZGVyLFxuICBWaWV3UmVzb2x2ZXIsXG4gIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gIFBMQVRGT1JNX0lOSVRJQUxJWkVSLFxuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBSZW5kZXJlclxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGFyc2U1RG9tQWRhcHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL3NlcnZlci9wYXJzZTVfYWRhcHRlcic7XG5cbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXInO1xuaW1wb3J0IHtNb2NrQW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svYW5pbWF0aW9uX2J1aWxkZXJfbW9jayc7XG5pbXBvcnQge01vY2tEaXJlY3RpdmVSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svZGlyZWN0aXZlX3Jlc29sdmVyX21vY2snO1xuaW1wb3J0IHtNb2NrVmlld1Jlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvbW9jay92aWV3X3Jlc29sdmVyX21vY2snO1xuaW1wb3J0IHtNb2NrTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svbW9ja19sb2NhdGlvbl9zdHJhdGVneSc7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb25fc3RyYXRlZ3knO1xuaW1wb3J0IHtNb2NrTmdab25lfSBmcm9tICdhbmd1bGFyMi9zcmMvbW9jay9uZ196b25lX21vY2snO1xuXG5pbXBvcnQge1Rlc3RDb21wb25lbnRCdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvdGVzdGluZy90ZXN0X2NvbXBvbmVudF9idWlsZGVyJztcbmltcG9ydCB7WEhSfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIveGhyJztcbmltcG9ydCB7QnJvd3NlckRldGVjdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvdXRpbHMnO1xuXG5pbXBvcnQge0NPTVBJTEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2NvbXBpbGVyJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3Rva2Vucyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5pbXBvcnQge1Jvb3RSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaSc7XG5pbXBvcnQge0RvbVJvb3RSZW5kZXJlciwgRG9tUm9vdFJlbmRlcmVyX30gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fcmVuZGVyZXInO1xuaW1wb3J0IHtEb21TaGFyZWRTdHlsZXNIb3N0fSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL3NoYXJlZF9zdHlsZXNfaG9zdCc7XG5cbmltcG9ydCB7XG4gIEV2ZW50TWFuYWdlcixcbiAgRVZFTlRfTUFOQUdFUl9QTFVHSU5TLFxuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSU1xufSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb25fZG9tJztcbmltcG9ydCB7RG9tRXZlbnRzUGx1Z2lufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2V2ZW50cy9kb21fZXZlbnRzJztcblxuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5pbXBvcnQge0xvZ30gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvdXRpbHMnO1xuXG5mdW5jdGlvbiBpbml0U2VydmVyVGVzdHMoKSB7XG4gIFBhcnNlNURvbUFkYXB0ZXIubWFrZUN1cnJlbnQoKTtcbiAgQnJvd3NlckRldGVjdGlvbi5zZXR1cCgpO1xufVxuXG4vKipcbiAqIERlZmF1bHQgcGF0Zm9ybSBwcm92aWRlcnMgZm9yIHRlc3RpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBURVNUX1NFUlZFUl9QTEFURk9STV9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID0gQ09OU1RfRVhQUihbXG4gIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gIG5ldyBQcm92aWRlcihQTEFURk9STV9JTklUSUFMSVpFUiwge3VzZVZhbHVlOiBpbml0U2VydmVyVGVzdHMsIG11bHRpOiB0cnVlfSlcbl0pO1xuXG5mdW5jdGlvbiBhcHBEb2MoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIERPTS5kZWZhdWx0RG9jKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIERlZmF1bHQgYXBwbGljYXRpb24gcHJvdmlkZXJzIGZvciB0ZXN0aW5nLlxuICovXG5leHBvcnQgY29uc3QgVEVTVF9TRVJWRVJfQVBQTElDQVRJT05fUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgQ09OU1RfRVhQUihbXG4gICAgICAvLyBUT0RPKGp1bGllKTogd2hlbiBhbmd1bGFyMi9wbGF0Zm9ybS9zZXJ2ZXIgaXMgYXZhaWxhYmxlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIG1ha2luZyBvdXIgb3duXG4gICAgICAvLyBsaXN0IGhlcmUuXG4gICAgICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICAgICAgQ09NUElMRVJfUFJPVklERVJTLFxuICAgICAgbmV3IFByb3ZpZGVyKERPQ1VNRU5ULCB7dXNlRmFjdG9yeTogYXBwRG9jfSksXG4gICAgICBuZXcgUHJvdmlkZXIoRG9tUm9vdFJlbmRlcmVyLCB7dXNlQ2xhc3M6IERvbVJvb3RSZW5kZXJlcl99KSxcbiAgICAgIG5ldyBQcm92aWRlcihSb290UmVuZGVyZXIsIHt1c2VFeGlzdGluZzogRG9tUm9vdFJlbmRlcmVyfSksXG4gICAgICBFdmVudE1hbmFnZXIsXG4gICAgICBuZXcgUHJvdmlkZXIoRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCB7dXNlQ2xhc3M6IERvbUV2ZW50c1BsdWdpbiwgbXVsdGk6IHRydWV9KSxcbiAgICAgIG5ldyBQcm92aWRlcihYSFIsIHt1c2VDbGFzczogWEhSfSksXG4gICAgICBuZXcgUHJvdmlkZXIoQVBQX0lELCB7dXNlVmFsdWU6ICdhJ30pLFxuICAgICAgRG9tU2hhcmVkU3R5bGVzSG9zdCxcbiAgICAgIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTLFxuICAgICAgbmV3IFByb3ZpZGVyKERpcmVjdGl2ZVJlc29sdmVyLCB7dXNlQ2xhc3M6IE1vY2tEaXJlY3RpdmVSZXNvbHZlcn0pLFxuICAgICAgbmV3IFByb3ZpZGVyKFZpZXdSZXNvbHZlciwge3VzZUNsYXNzOiBNb2NrVmlld1Jlc29sdmVyfSksXG4gICAgICBMb2csXG4gICAgICBUZXN0Q29tcG9uZW50QnVpbGRlcixcbiAgICAgIG5ldyBQcm92aWRlcihOZ1pvbmUsIHt1c2VDbGFzczogTW9ja05nWm9uZX0pLFxuICAgICAgbmV3IFByb3ZpZGVyKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogTW9ja0xvY2F0aW9uU3RyYXRlZ3l9KSxcbiAgICAgIG5ldyBQcm92aWRlcihBbmltYXRpb25CdWlsZGVyLCB7dXNlQ2xhc3M6IE1vY2tBbmltYXRpb25CdWlsZGVyfSksXG4gICAgXSk7XG4iXX0=